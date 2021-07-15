let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-bubble-row');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
