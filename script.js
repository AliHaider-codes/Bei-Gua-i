let currNode = null;

function initialize_tree(){
    let node1 = new BinaryTreeNode("Finale 4", "", "", null, null);
    let node2 = new BinaryTreeNode("Finale 3", "", "", null, null);
    let node3 = new BinaryTreeNode("Domanda 3", "Oui", "Nou", node2, node1);
    let node4 = new BinaryTreeNode("Finale 1", "", "", null, null);
    let node5 = new BinaryTreeNode("Finale 2", "", "", null, null);
    let node6 = new BinaryTreeNode("Domanda 2", "Yes", "No!", node4, node5);
    return new BinaryTree("Domanda 1", "Si", "No", node6, node3);
}

function Play() {
    currNode = initialize_tree().root;
    document.getElementById("question").innerHTML = currNode.value;
    document.getElementById("Play").remove();

    var btnLeft = document.createElement("button");
    btnLeft.id = "btnLeft";
    btnLeft.innerHTML = currNode.leftAnswer;
    btnLeft.onclick = function () {
        currNode = currNode.left;
        updateText();
    }
    
    var btnRight = document.createElement("button");
    btnRight.id = "btnRight";
    btnRight.innerHTML = currNode.rightAnswer;
    btnRight.onclick = function () {
            currNode = currNode.right;
            updateText();
    }

    var btnSection = document.getElementById("btnSection");
    btnSection.appendChild(btnLeft);
    btnSection.appendChild(btnRight);
}

function updateText() {
    document.getElementById("question").innerHTML = currNode.value;
    if (currNode.hasChildren){
        document.getElementById("btnLeft").innerHTML = currNode.leftAnswer;
        document.getElementById("btnRight").innerHTML = currNode.rightAnswer;
    }
    else{
        document.getElementById("btnLeft").remove();
        document.getElementById("btnRight").remove();
    }
}

class BinaryTreeNode {
    constructor(value, leftAnswer, rightAnswer, left, right) {
        this.leftAnswer = leftAnswer;
        this.rightAnswer = rightAnswer;
        this.value = value;
        this.left = left;
        this.right = right;
    }

    get hasChildren() {
        return !(this.left === null && this.right === null);
    }
}

class BinaryTree {
    constructor(value, leftAnswer, rightAnswer, left, right) {
        this.root = new BinaryTreeNode(value, leftAnswer, rightAnswer, left, right);
    }
}
