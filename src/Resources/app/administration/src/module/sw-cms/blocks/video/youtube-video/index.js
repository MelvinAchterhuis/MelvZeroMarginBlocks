let config = Shopware.Service('cmsService').getCmsBlockConfigByName('youtube-video');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
