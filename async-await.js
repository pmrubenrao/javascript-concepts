function takeOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order === 'daru') {
        resolve('daru|');
      } else {
        reject('daru k alawa kuch nahi milega|');
      }
    }, 1000);
  });
}

function orderFullilment(orderType) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('daru ordered|');
    }, 1000);
  });
}

function generateBill(orderType) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bill is generated for ' + orderType + '|');
    });
  });
}

async function orderCreator() {
  try {
    const orderContainer = await takeOrder('fish');
    const orderFullilmentContainer = await orderFullilment(orderContainer);
    const generateBillContainer = await generateBill(orderFullilmentContainer);

    console.log(
      orderContainer,
      orderFullilmentContainer,
      generateBillContainer
    );
  } catch (e) {
    console.log(e);
  }
}
orderCreator();
