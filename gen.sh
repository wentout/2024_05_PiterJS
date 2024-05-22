rm slider/slides/list.txt
names=$(ls ./slider/slides/ | grep -E '\.(json|md|mdx|txt)')
for t in $names; do {
	name=$(echo ./slider/slides/$t)
#	count=$(grep -E '(-----|\},\{|\}, \{)' -- $name | wc -l)
	count=$(grep -E '(-----|\},\{)' -- $name | wc -l)
	echo $t $count >> ./slider/slides/list.txt
}; done
cat ./slider/slides/list.txt
