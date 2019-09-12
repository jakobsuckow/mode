module.exports.onCreateNode = ({node, actions}) => {
    createNodeField = actions
    console.log(JSON.stringify(node, undefined, 4))
}

