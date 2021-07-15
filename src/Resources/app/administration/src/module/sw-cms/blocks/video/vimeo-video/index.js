let config = Shopware.Service('cmsService').getCmsBlockConfigByName('vimeo-video');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
