const faqQuestions = 
[
    {
        question: "What payment options are accepted?",
        answer: "We accept <b>Mastercard, VISA, PayPal</b> and <b>American Express</b>."
    },
    {
        question: "When will I receive my order?",
        answer: "The delivery time varies depending on the region you are located: <br><br> Peninsular Malaysia - <b>1 to 7</b> working days <br> Sabah & Sarawak - <b>5 to 12</b> working days"
    },
    {
        question: "How do I know if my order has been confirmed?",
        answer: "Once your order is confirmed, an <b>order confirmation email</b> will be sent to your email address. The details will include: <br><br> - Order number (ID) <br> - Item(s) ordered <br> - Order amount <br> - Cost <br> - Tracking information <br> - Billing and delivery addresses <br><br> If you aren't receiving any emails from us, please check the spam folder of your email as they might be there."
    },
    {
        question: "How do I return my order?",
        answer: "You are welcome to return your orders to any GS stores if you adhere to our return policy. <br><br> For more information about returns, please contact <b>+603-233 5566</b> or email <b>customersupport@gs.my</b>."
    },
    {
        question: "Why was my order cancelled?",
        answer: "There are several reasons that will cause your order to be cancelled: <br><br> - The product(s) you've ordered are <b>out of stock</b> or <b>no longer available</b>. <br> - You did not complete your payment <b>within 3 hours</b> after placing your order. <br> - There are <b>technical issues</b> (System failures, website malfunctions, connection problems). <br><br> A full refund will be given to you. (excluding incomplete payment)"
    },
    {
        question: "When will I receive my refund?",
        answer: "Your refund will be issued to your payment method within <b>7 - 14</b> working days."
    },
    {
        question: "Do you offer international shipping?",
        answer: "<b>No</b>, all orders are delivered in Malaysia only."
    },
    {
        question: "Where are you located?",
        answer: `To view all of our stores' information, <a class="click-here" href="FindAStore.html">click here</a>.`
    }
];

let faqQuestionsHTML = '';

faqQuestions.forEach((faqQuestion) =>
{
    faqQuestionsHTML += 
    `
        <div class="question-container">
            <div class="question-title-container" data-question-id="${faqQuestion.id}">
                <div class="question-title">${faqQuestion.question}</div>
                <img class="question-arrow-icon" src="images/logos/arrow-icon.png">
            </div>
            <div class="question-dropdown-menu">
                <div class="question-answer-container">
                    <div class="question-answer">${faqQuestion.answer}</div>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.all-questions-container').innerHTML = faqQuestionsHTML;

const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((container) => 
{
    const questions = container.querySelector(".question-title-container");
    const answer = container.querySelector(".question-dropdown-menu");

    questions.addEventListener("click", () => 
    {
        const isActive = container.classList.contains("active");

        questionContainers.forEach((qContainer) => 
        {
            qContainer.classList.remove("active");
            qContainer.querySelector(".question-dropdown-menu").style.maxHeight = 0;
        });

        if (!isActive)
        {
            container.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});