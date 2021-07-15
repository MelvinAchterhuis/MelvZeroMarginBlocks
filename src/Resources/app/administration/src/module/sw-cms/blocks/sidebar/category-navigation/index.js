let config = Shopware.Service('cmsService').getCmsBlockConfigByName('category-navigation');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
