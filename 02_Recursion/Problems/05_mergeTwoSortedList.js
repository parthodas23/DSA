const mergeLists = (list1, list2) => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeLists(list1, list2.next);
    return list2;
  }
};

// var mergeTwoLists = function(list1, list2) {
//     let dummy= new ListNode(0)
//     let current=dummy

//     while(list1 !== null && list2 !==null){
//         if(list1.val<list2.val){
//             current.next=list1
//             list1=list1.next // update value

//         }else{
//             current.next=list2
//             list2=list2.next
//         }

//         current=current.next
//     }
//     if (list1!==null) current.next=list1  // why --> when one of list become empty then add
//     if(list2!==null) current.next=list2

//     return dummy.next
// };
