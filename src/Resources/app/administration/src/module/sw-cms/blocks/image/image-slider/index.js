let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-slider');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
