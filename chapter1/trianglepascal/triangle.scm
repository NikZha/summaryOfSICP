(define (tp n k)
    (if (or (< k 0)  (= n k)) 1
      (+ (tp (- n 1) (- k 1)) (tp (- n 1) k))))

(print (tp 2 2))