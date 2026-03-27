; Упражнение 1.6.

(define (new-if predicate then-clause else-clause)
  (cond (predicate then-clause)
    (else else-clause)))

(new-if (= 2 3) 0 5)

(define (sqrt-iteri guess x)
  (new-if (goodenough? guess x)
    guess
    (sqrt-iteri (improve guess x)
      x)))

(define (sqrt-iter guess x)
  (if (goodenough? guess x)
    guess
    (sqrt-iter (improve guess x)
      x)))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (goodenough? guess x)
  (< (abs (- (* guess guess) x)) 0.001))

(define (square x)
  (sqrt-iteri 1.0 x))

(print (square 2))
