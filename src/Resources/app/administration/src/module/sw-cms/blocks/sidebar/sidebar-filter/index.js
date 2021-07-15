let config = Shopware.Service('cmsService').getCmsBlockConfigByName('sidebar-filter');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
