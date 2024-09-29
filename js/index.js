
// first card 
document.getElementById("donate").addEventListener('click',function(){
// Get the input amount
    const amountNumber = parseFloat(document.getElementById("amount").value);
// Get the current donation and balance values
    const donationNumber = parseFloat(document.getElementById("donation").innerText);
    const balanceNumber = parseFloat(document.getElementById("balance").innerText);
// Ensure a valid amount was entered
    if (isNaN(amountNumber) || amountNumber <= 0 ) {
        alert("Please enter a valid donation amount.");
      
        document.getElementById("amount").value = '';
        return;
    }
    if(balanceNumber<=0|| amountNumber>balanceNumber){
        alert("Insufficient Balance");
       
        document.getElementById("amount").value = '';
        return;
    }
// Calculate totals
    const totalDonation = amountNumber + donationNumber;

    const remainingBalance = balanceNumber - amountNumber;
    
// Update the displayed donation and balance amounts  
    document.getElementById("donation").innerText = totalDonation.toFixed(2);
    document.getElementById("balance").innerText = remainingBalance.toFixed(2);
//  clear the input field
    document.getElementById("amount").value = '';

    const modal = document.getElementById("my_modal_5");
    modal.showModal(); 

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-lg border border-gray-200 "
    historyItem.innerHTML = `
    <p class="font-bold text-xl">${amountNumber} Taka is donated for Donate for Flood at Noakhali, Bangladesh</p>
    <p>${new Date().toLocaleDateString(undefined, options)}</p>
    `
    document.getElementById("records").appendChild(historyItem);
})

// second card 
document.getElementById("donateTwo").addEventListener('click',function(){
// Get the input amount
    const amountNumberTwo = parseFloat(document.getElementById("amountTwo").value);
// Get the current donation and balance values
    const donationNumberTwo = parseFloat(document.getElementById("donationTwo").innerText);
    const balanceNumber = parseFloat(document.getElementById("balance").innerText);
// Ensure a valid amount was entered
    if (isNaN(amountNumberTwo) || amountNumberTwo <= 0 ) {
        alert("Please enter a valid donation amount.");
       
        document.getElementById("amountTwo").value = '';
        return;
    }
    if(balanceNumber<=0|| amountNumberTwo>balanceNumber){
        alert("Insufficient Balance");
     
        document.getElementById("amountTwo").value = '';
        return;
    }
// Calculate totals
    const totalDonationTwo = amountNumberTwo + donationNumberTwo;

    const remainingBalanceTwo = balanceNumber - amountNumberTwo;
    
// Update the displayed donation and balance amounts  
    document.getElementById("donationTwo").innerText = totalDonationTwo.toFixed(2);
    document.getElementById("balance").innerText = remainingBalanceTwo.toFixed(2);
//  clear the input field
    document.getElementById("amountTwo").value = '';

    const modal = document.getElementById("my_modal_5");
    modal.showModal(); 
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-lg border border-gray-200 "
    historyItem.innerHTML = `
    <p class="font-bold text-xl">${amountNumberTwo} Taka is donated for Me and my friend circle went to Lokkhipur with relief</p>
    <p>${new Date().toLocaleDateString(undefined, options)}</p>
    `
    document.getElementById("records").appendChild(historyItem);
})

// third card 
document.getElementById("donateThree").addEventListener('click',function(){
// Get the input amount
    const amountNumberThree = parseFloat(document.getElementById("amountThree").value);
// Get the current donation and balance values
    const donationNumberThree = parseFloat(document.getElementById("donationThree").innerText);
    const balanceNumber = parseFloat(document.getElementById("balance").innerText);
// Ensure a valid amount was entered
    if (isNaN(amountNumberThree) || amountNumberThree <= 0 ) {
        alert("Please enter a valid donation amount.");
       
        document.getElementById("amountThree").value = '';
        return;
    }
    if(balanceNumber<=0|| amountNumberThree>balanceNumber){
        alert("Insufficient Balance");
     
        document.getElementById("amountThree").value = '';
        return;
    }
// Calculate totals
    const totalDonationThree = amountNumberThree+ donationNumberThree;

    const remainingBalanceThree = balanceNumber - amountNumberThree;
    
// Update the displayed donation and balance amounts  
    document.getElementById("donationThree").innerText = totalDonationThree.toFixed(2);
    document.getElementById("balance").innerText = remainingBalanceThree.toFixed(2);
//  clear the input field
    document.getElementById("amountThree").value = '';

    const modal = document.getElementById("my_modal_5");
    modal.showModal(); 

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-lg border border-gray-200 "
    historyItem.innerHTML = `
    <p class="font-bold text-xl">${amountNumberThree} Taka is donated for Abu Bakar in Gonovhobon at the day of victory!!!!</p>
    <p>${new Date().toLocaleDateString(undefined, options)}</p>
    `
    document.getElementById("records").appendChild(historyItem);
    
})


document.getElementById("history").addEventListener('click',function(){

    document.getElementById("history").style.backgroundColor = '#B4F461'; 
    document.getElementById("ddonate").style.backgroundColor = 'transparent';
    document.getElementById("cards").classList.add('hidden');
    document.getElementById("records").classList.remove('hidden');

    
})
document.getElementById("ddonate").addEventListener('click',function(){

    document.getElementById("history").style.backgroundColor = 'transparent'; 
    document.getElementById("ddonate").style.backgroundColor = '#B4F461';
    document.getElementById("cards").classList.remove('hidden');
    document.getElementById("records").classList.add('hidden');
    
})