export type treeNode = {
    id: string
    children: treeNode[]
};

export type treeNodeExpand = {
    id: string
    children: treeNode[]
    path?: string
}

export type parentTree = {
    id: string
    parent_id?: string
}