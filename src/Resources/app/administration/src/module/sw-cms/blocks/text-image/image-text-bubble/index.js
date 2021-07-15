let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-text-bubble');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
