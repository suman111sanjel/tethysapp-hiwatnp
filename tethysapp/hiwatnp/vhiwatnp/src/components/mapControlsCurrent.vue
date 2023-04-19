<template>
  <div class="card-box full-height full-width about-div">
    <div class="pannel-title">
      <h6 class="heading1">
        <el-select v-model="hiwatObject.ModelDayPartation" class="m-2 ModelDayParation" placeholder="Select Day"
                   size="small"
                   @change="changedModelDay">
          <el-option
              v-for="item in ModelDayOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        Outlook ({{ hiwatObject.HIWATDateLevel }})
      </h6>
    </div>
    <div class="body-container">
      <!--      <i class="fas fa-cloud-rain"></i>-->
      <!--      <i class="fas fa-poo-storm"></i>-->

      <div class="layerCollection"></div>
      <h6 class="heading1">Hourly prediction</h6>
      <div class="layerCollection layerCollection1"></div>
    </div>
  </div>
</template>

<script>


import {mapState} from "vuex";

export default {
  name: "mapControlsCurrent",
  data() {
    return {ModelDayOptions: [{value: '_day1', label: 'Day 1'}, {value: '_day2', label: 'Day 2'}]}
  }, methods: {
    changedModelDay() {

      let CopyDate = new Date(this.hiwatObject.HIWATDate.getTime());
      if (this.hiwatObject.ModelDayPartation == 'Day 1') {
        CopyDate.setDate(CopyDate.getDate() + 1);
      } else {
        CopyDate.setDate(CopyDate.getDate() + 2);
      }
      const year = CopyDate.getFullYear(); // Get the year (yyyy)
      const month = String(CopyDate.getMonth() + 1).padStart(2, '0'); // Get the month (mm), and pad with leading zero if necessary
      const day = String(CopyDate.getDate()).padStart(2, '0'); // Get the day (dd), and pad with leading zero if necessary
      const formattedDate = `${year}-${month}-${day}`; // Format the date as yyyy-mm-dd
      this.hiwatObject.HIWATDateLevel = formattedDate;
      this.hiwatObject.LayerListPredictionAccumulated.forEach((value) => {
        let LayerObject = value.layerObj;
        let LayerSource = LayerObject.getSource();
        let Style = LayerSource.getParams().STYLES;
        if (this.hiwatObject.ModelDayPartation == '_day1') {
          Style = Style.replace("_day2", "_day1");
        } else {
          Style = Style.replace("_day1", "_day2");
        }
        LayerSource.updateParams({
          'STYLES': Style,
        })
      })

    }
  },
  computed: {
    ...mapState([
      'hiwatObject'
    ]),

  },
  created() {

  },
}
</script>

<style>
.body-container {
  height: calc(100% - 47px);
}


.layerCollection .LayerDiv.withOpacSlider {
  margin-bottom: 18px;
}


.heading1 {
  padding: 10px 18px;
  color: white;
  background-color: #007196;
}

.pannel-title .heading1 {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.ModelDayParation .el-input__inner {
  background-color: #007196;
  width: 85px;
  color: white;
}
</style>