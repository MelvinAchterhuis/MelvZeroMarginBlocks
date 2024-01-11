const blocks = Shopware.Service('cmsService').getCmsBlockRegistry();

Object.keys(blocks).forEach(key => {
    let block = blocks[key];
    block.defaultConfig.marginBottom = '';
    block.defaultConfig.marginTop = '';
    block.defaultConfig.marginLeft = '';
    block.defaultConfig.marginRight = '';

    Shopware.Service('cmsService').registerCmsBlock(block);
});
