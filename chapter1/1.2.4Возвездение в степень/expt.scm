(define (my-expt b n)
  (if (= n 0)
    1
    (* b (my-expt b (- n 1)))))

(print (my-expt 2 10))