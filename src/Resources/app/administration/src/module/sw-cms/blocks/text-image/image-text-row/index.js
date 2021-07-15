let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-text-row');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
