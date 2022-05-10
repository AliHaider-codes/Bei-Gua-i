let currNode = null;

function initialize_tree(){
    let node1 = new BinaryTreeNode("Torna quando vuoi.", "", "", null, null);
    let node2 = new BinaryTreeNode("Finale 3", "", "", null, null);
    let node3 = new BinaryTreeNode("Con una serie di scelte determinerai il futuro della Liguria e delle zone circostanti. Sarai capace di salvare la città?", "Si", "No", node6, node1);
    let node4 = new BinaryTreeNode("Buona idea! Per cominciare, abbiamo chiesto di prelevare campioni di 10 Kg, per un totale di 250 Kg di terreno. Se sei d’accordo possiamo procedere!", "Si", "No", null, null);
    let node5 = new BinaryTreeNode("Sicuro? Il titanio è il metallo più resistente al mondo! Inoltre, serve nel settore dell’elettronica, nell’industria aerospaziale e per le protesi. Che ne pensi di chiedere alla Liguria la possibilità di prelevare dei campioni sul luogo, poi vediamo.", "Si", "No", null, null);
    let node6 = new BinaryTreeNode("Vi è la possibilità di estrarre titanio nelle aree del Beigua, materiale resistente alle alte temperature e alla corrosione. Vuoi prenderlo?", "Si", "No", node4, node5);
    return new BinaryTree("Partiamo?", "Si", "No", node6, node3);
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
