describe('Bubble Sort', function(){

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    
    it('can handle a value', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    let arr = [1, 0, 7, 9]
    let sarr = [0, 1, 7, 9]
    it('can handle multiple values', function(){
        expect( bubbleSort(arr) ).toEqual(sarr)
    });

    it('can handle multiple values', function(){
        beforeAll(function() {
            spyOn(bubbleSort(), 'swap').and.callThrough();
        });

        expect( bubbleSort(arr) ).toEqual(sarr)
        expect( bubbleSort.swap.calls.count() ).toEqual(1)
    });

    

  });