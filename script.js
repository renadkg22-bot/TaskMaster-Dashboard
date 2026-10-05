function addTask() {
    // 1. جلب قيمة الإدخال من صندوق الكتابة
    let inputField = document.getElementById("taskInput");
    let taskText = inputField.value.trim();

    // 2. التحقق من أن الحقل ليس فارغاً
    if (taskText === "") {
        alert("الرجاء كتابة مهمة أولاً يا مبرمجة!");
        return;
    }

    // 3. إنشاء عنصر قائمة جديد (li)
    let li = document.createElement("li");
    li.textContent = taskText;

    // 4. إضافة خاصية الحذف عند الضغط على المهمة
    li.onclick = function() {
        li.remove();
    };

    // 5. إضافة المهمة الجديدة إلى قائمة المهام في الصفحة
    let taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    // 6. تفريغ صندوق الكتابة استعداداً لمهمة جديدة
    inputField.value = "";
}