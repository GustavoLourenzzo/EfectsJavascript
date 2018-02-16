/*	Efeitos aplicados a imagens -- Javascript Puro
###### Requisitos: #######

***** Classes ******
---------------------------------------------------------
 img : Classe base, requisito para a aplicação dos demais efeitos, cria a estrutura basica necessaria para a aplicação dos demais efeitos.

 As seguintes formatações (CSS) aplicadas a imagem são aplicadas a estrutura:

 float, position, border, padding, margin, width, heigth e display

 --------------------------------------------------------
img-zoom: Classe utilizada para aplicar o efeito de zoom central na imagem.

manipula-se o efeito de escala e faz uso do evento de onMouseOver para ampliar e onMouseOut para reduzir.
---------------------------------------------------------
img-cir : Aplica efeito de circulo a imagem, podendo ser usada em conjunto com os demais efeitos

manipula-se apenas o atributo border-radios
---------------------------------------------------------
img-sub : cria uma introdução da imagem a partir de 2 adicionais obrigatorios.

alt -- descrição da imagem, bem brevemente.

data-autor -- nome do responsavel ou ator da foto.

---------------------------------------------------------


*/

// verifica quantas imagens possuem os requisitos minimos para a aplicação dos efeitos
window.onload = function(){
	var imgs = document.getElementsByClassName('img');
	if(imgs.length > 0){
		// percorre o laço acrescentando os efeitos basicos
		for(var i=0; i < imgs.length; i++){
			
			//criar a div que ira envolver a imagem
			var frag = document.createElement('div');

			//atualiza o CSS do novo elemento
			frag.style.float = imgs[i].style.float;
			frag.style.position = imgs[i].position;
			frag.style.width = imgs[i].width + 'px';
			frag.style.height = imgs[i].height + 'px';
			frag.style.padding = imgs[i].style.padding;
			frag.style.display = imgs[i].style.display;
			frag.style.margin = imgs[i].style.margin;
			frag.style.border = imgs[i].style.border;
			frag.style.overflow = "hidden";
			//fim da atualização do css

			//localiza-se o no "pai" da imagem
			var noPai = imgs[i].parentNode;
			//localiza se existe algum elemnto acima dele
			if(imgs[i].previousSibling){
				//se existir o novo elemento e adicionado imediatamente depois do no anterior a imagem
				noPai.insertBefore(frag,imgs[i].previousSibling);
			}else{
				// se nao houver e adicionado como o primeiro filho do no pai
				noPai.insertBefore(frag, noPai.firstChild);
			}
			//formatações aplicadas as trnasições da imagem
			imgs[i].style["-webkit-transition"] = 'all 2s cubic-bezier(.190, 1.000, .220, 1.000)';
			imgs[i].style["-moz-transition"] = 'all 2s cubic-bezier(.190, 1.000, .220, 1.000)';
			imgs[i].style["-ms-transition"] = 'all 2s cubic-bezier(.190, 1.000, .220, 1.000)';
			imgs[i].style["-o-transition"] = 'all 2s cubic-bezier(.190, 1.000, .220, 1.000)';
			imgs[i].style["transition"] = 'all 2s cubic-bezier(.190, 1.000, .220, 1.000)';
			//fim das formatações aplicadas as trnasições da imagem
			//a imagem e acrescentada como no filho do novo elemnto
			frag.appendChild(imgs[i]);

		}

		//verifica quantas imagens possem o atributo .img-zoom
		var img_zoom = document.getElementsByClassName('img-zoom');
		//percorre as imagens que possuem a classe
		for(var i=0; i < img_zoom.length; i++){
			//verifica se a imagem possue os requitos minimos para o efeito
			if(img_zoom[i].classList.contains('img')){
				//inserção do efeito houver
				img_zoom[i].onmouseover = function(e){
					this.style['-webkit-transform'] = 'scale(1.5)';
					this.style['-moz-transform'] = 'scale(1.5)';
					this.style['-ms-transform'] = 'scale(1.5)';
					this.style['-o-transition'] = 'scale(1.5)';
					this.style['transition'] = 'scale(1.5)';
				}
				//insrção do evento out
				img_zoom[i].onmouseout = function(e){
					this.style['-webkit-transform'] = 'scale(1.0)';
					this.style['-moz-transform'] = 'scale(1.0)';
					this.style['-ms-transform'] = 'scale(1.0)';
					this.style['-o-transition'] = 'scale(1.0)';
					this.style['transition'] = 'scale(1.0)';
				}
			}
		}

		//verifica quantas imagens possuem o atributo .img-zoom-sub
		var img_sub = document.getElementsByClassName('img-sub');
		//percorre as imagens que possuem a classe
		for(var i = 0; i < img_sub.length; i++){
			//verifica se a imagem possue os requisitos minimos para o efeito
			if((img_sub[i].classList.contains('img')) && (img_sub[i].hasAttribute('alt')) && (img_sub[i].hasAttribute('data-autor'))){
				//cria a nova div
				var newDiv = document.createElement('div');
				//setar os novos atributos
				newDiv.style.position = "absolute";
				newDiv.style.width = "100%";
				newDiv.style.height = "100%";
				newDiv.style.top = "0px";
				newDiv.style.background = "rgba(0,0,0,0.8)";
				newDiv.style['color'] = "white"; 
				newDiv.style['text-align'] = "center";
				newDiv.style['font-size'] = (img_sub[i].width * 0.06) + 'px';
				newDiv.style['padding-top'] = '30%';
				newDiv.style.opacity = '0';
				newDiv.style["-webkit-transition"] = 'all 3s cubic-bezier(.190, 1.000, .220, 1.000)';
				newDiv.style["-moz-transition"] = 'all 3s cubic-bezier(.190, 1.000, .220, 1.000)';
				newDiv.style["-ms-transition"] = 'all 3s cubic-bezier(.190, 1.000, .220, 1.000)';
				newDiv.style["-o-transition"] = 'all 3s cubic-bezier(.190, 1.000, .220, 1.000)';
				newDiv.style["transition"] = 'all 3s cubic-bezier(.190, 1.000, .220, 1.000)';
				newDiv.appendChild(document.createElement('p'));
				var paragrafo = newDiv.firstChild;
				paragrafo.textContent = img_sub[i].alt;
				newDiv.appendChild(document.createElement('hr'));
				newDiv.lastChild.style.width = "60%";
				var span = document.createElement('span');
				span.textContent = 'Autor: ' + img_sub[i].getAttribute('data-autor');
				newDiv.appendChild(span);
				var pai = img_sub[i].parentNode;
				pai.style.position = "relative";
				pai.appendChild(newDiv);
				//efeitos div texto
				newDiv.onmouseover = function(e){
					this.style.opacity = '1';

				}
				//insrção do evento out
				newDiv.onmouseout = function(e){
					this.style.opacity = '0';
				}

			}
		}
		
		//verifica quantas imagem possuem o atributo .img-cir
		var img_cir = document.getElementsByClassName('img-cir');
		//percorre as imagens que possuem a classe
		for(var i = 0; i< img_cir.length; i++){
			//verifica se a imagem possue os requistos minimos para o efeito
			if(img_cir[i].classList.contains('img')){
				var noPai = img_cir[i].parentNode;
				noPai.style['-webkit-border-radius'] = '50%';
				noPai.style['-moz-border-radius'] = '50%';
				noPai.style['-ms-border-radius'] = '50%';
				noPai.style['-o-border-radius'] = '50%';
				noPai.style['border-radius'] = '50%';
			}
							
		}
	}
}
		