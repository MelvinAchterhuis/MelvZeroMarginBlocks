let config = Shopware.Service('cmsService').getCmsBlockConfigByName('product-three-column');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
