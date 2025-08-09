export function tooglePasswordVisibility(object: any) 
  {
    const passwordInput = document.getElementById('i_password') as HTMLInputElement;
    if (passwordInput.type === 'password') 
        {
      passwordInput.type = 'text';
    }
    else {
      passwordInput.type = 'password';
    } 
  }