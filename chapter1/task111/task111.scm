(define A 4)

(define (task111 n)
    (if (< n 3)
    n
    (+ (task111 (- n 1)) (task111 (- n 2)) (task111 (- n 3)))))  

(print (task111 A))


(define (task111Dinamic a b c n)
  (if (< n 3)
    a
    (task111Dinamic (+ a b c) a b (- n 1))))

(print (task111Dinamic 2 1 0 A))
