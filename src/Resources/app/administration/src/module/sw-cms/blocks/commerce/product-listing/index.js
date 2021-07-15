let config = Shopware.Service('cmsService').getCmsBlockConfigByName('product-listing');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
