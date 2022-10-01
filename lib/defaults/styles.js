const DEFAULT_STYLES = {
    ':bgcolor': {
        bgcolor: 'white',
    },
    ':edge': {
        dir: 'none',
        color: '#333333',
    },
    ':house': {
        style: 'filled',
        color: '#2C2F33',
        labeljust: 'l',
        fontname: 'Sedgwick Ave',
        fontcolor: 'white',
        fontsize: 16,
        margin: 10,
    },
    ':house-2': {
        color: 'black',
    },
    // Family subgraph
    ':family': {
        label: '',
        style: 'invis',
        margin: 0,
    },
    ':node': {
        shape: 'box',
        style: 'filled',
        fontname: 'Handlee',
        fontcolor: 'black',
        width: 2.5,
        fillcolor: '#efefef',
        color: '#333333',
    },
    ':digraph': {
        rankdir: 'LR',
        ranksep: 0.4,
        splines: 'ortho',
    },
    ':union': {
        shape: 'circle',
        style: 'filled',
        penwidth: 1,
        color: 'white',
        label: '',
        height: 0.1,
        width: 0.1,
    },
    ':children': {
        shape: 'box',
        style: 'filled',
        label: '',
        height: 0.005 /* Make it look like a line. Brilliant! */,
        penwidth: 0,
        width: 0.1,
    },
    ':parent-link': {
        weight: 2 /* give priority to be straighter than parent2 */,
    },
    ':parent2-link': {
        style: 'dashed',
        penwidth: 1,
        weight: 1,
    },
    ':parent-child-link': {
        weight: 3 /* prefer bridges to be straight */,
    },
    ':child-link': {
        dir: 'forward',
        arrowhead: 'open',
        arrowsize: 1,
        weight: 2,
    },
    ':child2-link': {
        style: 'dashed',
        penwidth: 1,
        weight: 1,
    },
};

module.exports = DEFAULT_STYLES;
