module.exports.onCreateNode = ({node, actions}) => {
    createNodeField = actions
    if(node.internal.type == "Airtable") {
        console.log(JSON.stringify(node, undefined, 4))
    }
}

