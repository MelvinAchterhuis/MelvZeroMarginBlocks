let config = Shopware.Service('cmsService').getCmsBlockConfigByName('product-slider');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
