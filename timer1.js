
  const timer = process.argv.slice(2);

  timer.forEach((elem) => {
      if (elem >= 0) {
        setTimeout(() => {
          process.stdout.write('\x07');
        }, elem * 1000);
      }
    });
  
