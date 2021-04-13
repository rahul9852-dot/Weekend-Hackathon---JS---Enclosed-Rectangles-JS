//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	//write your code
	
	if(contains(rec1,rec2)){
		
		const relativeDim=relative(recA,recB);
		return {...rec1,children:[relativeDim]}
	}
	else if(contains(rec2, rec1)){
		const relativeDim=relative(rec2,rec1);
		return {...rec2, children:[relativeDim]}
	}
	else{
		return {...recA}
	}
}


function relative(rec1,rec2){
	const recAn=normalise(rec1)
	const recBn=normalize(rec2)
	
	const res={
		children:rec2.children
	}
	
	if(rec2.top){
		res.top=`{recBn.x1-recAn.x1}px`;
	}
	if(rec2.left){
		res.left=`{recBn.y1-recAn.y1}px`;
	}
	if(rec2.height){
		res.height=rec2.height;
	}
	if(rec2.width){
		
	}
}

module.exports = updateStructure;
