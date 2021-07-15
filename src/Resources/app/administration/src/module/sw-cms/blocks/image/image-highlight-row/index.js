let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-highlight-row');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
