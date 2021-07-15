let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-two-column');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
