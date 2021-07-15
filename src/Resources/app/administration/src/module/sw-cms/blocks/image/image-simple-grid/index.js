let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-simple-grid');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
