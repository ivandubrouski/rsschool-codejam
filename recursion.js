function recursion(tree){
	if (!(tree.left && tree.right)){
		return [[tree.value]];
	}
	let arr=[];
	let left=recursion(tree.left);
	let right=recursion(tree.right);

	arr.push([tree.value]);
	for(let i=0; i<left.length; i++){
		arr.push([...left[i].concat(...right[i])]);
	}
	return arr;
}