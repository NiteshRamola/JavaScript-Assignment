function hideEmail(em){
    let parts = em.split('@');
    let newEmail = parts[0].charAt(0) + "****" + parts[1];
    return newEmail;
}

console.log(hideEmail('random_em@random.com'))