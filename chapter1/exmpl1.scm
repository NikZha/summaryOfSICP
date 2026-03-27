;; готовый скрипт для выполнения csi.exe -script .\exmpl1.scm
(define pi 3.14)
(define radius 10)
(define circumference (* 2 pi radius))
; (print circumference)

;; 1.1.6


(define (abs1 x)
  (if (< x 0)
    (print (- x))
    (print x)))


(define (more5 x)
  ((and (< 5 x) (> 10 x))))

(define a 3)

(define b (+ a 1))
(cond ((= a 4) 6)
  ((= b 4) (+ 6 7 a))
  (else 25))

;;упражнение 1.2
(/ (+ 5 4 (- 2 (- 3 (+ 6 4/5)))) (* 3 (- 6 2) (- 2 7)))
;;упражнение 1.3
(define (sumsqrt x y)
  (+ (* x x) (* y y)))

(define (retsq a b c)
  (cond ((> a b c) (sumsqrt a b))
    ((> a c b) (sumsqrt a c))
    ((> b a c) (sumsqrt b a))
    ((> b c a) (sumsqrt b c))
    ((> c a b) (sumsqrt c a))
    ((> c b a) (sumsqrt c b))))
; (retsq 1 3 2)

;; упражнение 1.4

(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))

; (a-plus-abs-b 1 - 2)

(define (sqrt x)
  (define (good-enough? guess)
    (< (abs (- (* guess guess) x)) 0.001))
  (define (improve guess)
    (average guess (/ x guess)))
  (define (average x y)
    (/ (+ x y) 2))
  (define (sqrt-iter guess)
    (if (good-enough? guess)
      guess
      (sqrt-iter (improve guess))))
  (sqrt-iter 1.0))

(print (sqrt 9))
