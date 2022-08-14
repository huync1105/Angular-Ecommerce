export function handleResponse(res: any, toast: any, onSuccess?:any, onFail?:any) {
  console.log("res", res);
  
  if (res.statusCode === 200) {
    toast.success(res.message);
    onSuccess && onSuccess();
  } else {
    toast.error(res.message);
    onFail && onFail();
  }
}

export function debounce(func: any, timeout: number = 300) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(args)
    }, timeout);
  }
}