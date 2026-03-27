(define (dived n x)
    (if (< x 2)
    n
    (+ n (dived n (- x 1)))))


 (dived 5 3)