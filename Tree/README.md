# Tree

<br>

## Introduction
- <b>Definition</b>
  - <b>트리(Tree)</b>는 상위-하위의 계층적 구조를 갖는 자료 구조로, <b>노드(node)</b>들이 <b>간선(edge)</b>으로 서로 연결되어 있는 자료 구조를 말한다.
  - 트리는 <b>탐색형 자료 구조</b>로 널리 사용되며, 특정 조건을 지키도록 구성된 트리에서는 배열이나 리스트를 사용하는 것보다 같은 작업을 더 빠르게 수행할 수 있다.
  - <b>주요 용어</b>
    - <b>노드(node)</b>: 자료가 저장된 곳을 말한다. 노드 사이에는 상/하위 관계가 존재하며, 상위 노드를 <b>부모(parent)</b>, 하위 노드를 <b>자식(child)</b> 노드라고 부른다. 부모 노드가 서로 같은 두 노드는 <b>형제(sibling)</b> 노드라고 부르며, 부모 노드와 그의 부모들을 통틀러 <b>선조(ancestor)</b>, 자식 노드와 그의 자식들을 통틀어 <b>자손(descendant)</b>이라고도 부른다.
    - <b>루트(root)</b>: 자신과 연결되어 있는 다른 노드들을 자손으로 갖는 노드를 말한다. 트리에는 오직 단 하나의 루트만 존재한다.
    - <b>간선(edge)</b>: 노드들을 서로 연결하고 있는 것을 말한다.
    - <b>깊이(depth)</b>: 루트에서 어떤 노드에 도달하기 위해 거쳐야 하는 간선의 수를 말한다.
    - <b>높이(height)</b>: 트리에서 가장 깊숙히 있는 노드의 깊이를 말한다.
    - <b>서브 트리</b>: 전체 트리 구조에서 어떤 노드와 그 자손들로 구성된 트리를 말한다.
  - <b>이진 트리의 순회 종류</b>   
    이진 트리의 순회 순서 중 유명한 세 가지로 다음과 같은 순회 순서가 존재한다.
    - <b>전위 순회(Preorder Traverse)</b>: (루트)(왼쪽 서브 트리)(오른쪽 서브 트리) 순서로 순회하는 것을 말한다.
    - <b>중위 순회(Inorder Traverse)</b>: (왼쪽 서브 트리)(루트)(오른쪽 서브 트리) 순서로 순회하는 것을 말한다.
    - <b>후위 순회(Postorder Traverse)</b>: (왼쪽 서브 트리)(오른쪽 서브 트리)(루트) 순서로 순회하는 것을 말한다.
- <b>Characteristics</b>
  - <b>재귀적 속성</b>: 트리에서 한 노드와 그의 자손들을 모두 모으면 그들도 하나의 트리가 된다. 하나의 트리는 루트와 루트 밑에 존재하는 서브 트리의 집합이라고 할 수 있다.
  - <b>트리의 표현</b>: 트리는 여러 가지 방식으로 표현할 수 있다. 가장 일반적인 형태는 각 노드를 <b>하나의 구조체/객체</b>로 표현하고, 이들을 <b>서로의 포인터</b>로 연결하는 것이다.

<br>

## How to Use
- <b>트리의 노드</b>
  ```ts
  // TypeScript
  class TreeNode<T> {
    value: T, // 저장할 자료
    parent: TreeNode<T>, // 부모 노드를 가리키는 포인터
    children: Array<TreeNode<T>> // 자식 노드를 가리키는 포인터
  }
  ```
- <b>트리의 순회</b>   
  트리의 재귀적 속성을 이용하면 트리의 순회를 쉽게 구현할 수 있다.
  ```ts
  // TypeScript
  const traversal = (root: TreeNode<number>) => {
    console.log(root.value);
    
    const length: number = root.children.length;
    for (let i = 0; i < length; i++) {
      traversal(root.children[i]);
    }
  }
  ```
- <b>트리의 높이</b>   
  트리의 높이는 루트의 각 자식을 루트로 하는 서브 트리들의 높이를 각각 재귀 호출을 통해 계산하고, 그 중 최댓값에 1을 더한 것과 같다. 
  ```ts
  // TypeScript
  const height = (root: TreeNode<number>): number => {
    let h = 0;
    let length = root.children.length;
    for (let i = 0; i < length; i++) {
      h = Math.max(h, 1 + height(root.children[i]));
    }
    return h;
  }
  ``` 
<br>

## Examples
- <a href="https://github.com/HyunJinNo/Algorithm/blob/main/Tree/TRAVERSAL.ts">TRAVERSAL</a>
- FORTRESS
