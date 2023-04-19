from tethys_sdk.base import TethysAppBase, url_map_maker


class Hiwatnp(TethysAppBase):
    """
    Tethys app class for Hiwatnp.
    """

    name = 'HIWAT Extreme - Nepal'
    index = 'hiwatnp:home'
    icon = 'hiwatnp/images/icon.gif'
    package = 'hiwatnp'
    root_url = 'hiwatnp'
    color = '#16a085'
    description = ''
    tags = 'HIWAT'
    enable_feedback = False
    feedback_emails = []

    def url_maps(self):
        """
        Add controllers
        """
        UrlMap = url_map_maker(self.root_url)

        url_maps = (
            UrlMap(
                name='home',
                url='hiwatnp',
                controller='hiwatnp.controllers.home'
            ), UrlMap(
                name='getLatestHIWATInfo',
                url='hiwatnp/getLatestHIWATInfo',
                controller='hiwatnp.controllers.getLatestHIWATInfo'
            ),
        )

        return url_maps