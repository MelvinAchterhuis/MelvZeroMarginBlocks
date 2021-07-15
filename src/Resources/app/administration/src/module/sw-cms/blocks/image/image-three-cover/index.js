let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-three-cover');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
