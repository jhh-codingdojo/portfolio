
	(function() {

			$Dojo = function(Id) {

				element = document.getElementById(Id);

				element.click = function(callback) {

					element.addEventListener("click", function(){
						callback();
					})
				};

				element.hover = function(over,out) {

					element.addEventListener("mouseover", function(){
						over();
						
					});

					element.addEventListener("mouseout",function(){
						out();
						
					});


				};


				return element;
			}
				return $Dojo;
		} ) ();