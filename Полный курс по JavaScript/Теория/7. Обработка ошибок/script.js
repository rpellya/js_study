// ОБРАБОТКА ОШИБОК

const fnWithError = () => {
   throw new Error('Some error')
}

fnWithError() // Выполнение кода остановится после появления Uncaught ошибки

console.log('Continue')

// TRY/CATCH 
 
try {
   // Выполнение блока кода
} catch (error) {
   // Этот блок выполняется случае возникновения ошибок в блоке try
}

// Пример

const fnWithError2 = () => {
   throw new Error('Some error')
}

try {
   fnWithError() 
} catch (error) {
   console.error(error)
   console.log(error.message)
}

console.log('Continue...')
