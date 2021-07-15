let config = Shopware.Service('cmsService').getCmsBlockConfigByName('product-heading');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
