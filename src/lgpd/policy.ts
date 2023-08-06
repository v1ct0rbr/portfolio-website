import React from 'react';
import { last_cookie_policy } from './contants';
import { format } from 'date-fns';
const policy = `
<div>
            <p>Esta Política de Cookies destina-se a explicar como o nosso site de portfólio utiliza cookies e tecnologias similares.
                Ao continuar a navegar em nosso site, você concorda com o uso de cookies, de acordo com os termos desta política.</p>

            <h2>O que são cookies?</h2>
            <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet, smartphone) quando você
                visita um site.
                Esses arquivos contêm informações que podem ser utilizadas para melhorar a experiência do usuário, analisar o
                tráfego do site e personalizar o conteúdo de acordo com as preferências do visitante.</p>

            <h2>Como usamos cookies?</h2>
            <p>Ao acessar nosso site de portfólio, poderemos utilizar cookies para os seguintes fins:</p>
            <ol>
                <li><strong>Análise de tráfego:</strong> Utilizamos cookies para obter informações sobre como os visitantes
                    interagem com nosso site. Isso nos ajuda a entender quais páginas são mais populares, o tempo médio gasto no
                    site e outras métricas importantes para melhorar a qualidade do conteúdo e da experiência de navegação.</li>
                <li><strong>Personalização:</strong> Podemos utilizar cookies para lembrar suas preferências e fornecer um conteúdo
                    mais personalizado durante sua visita ao nosso site.</li>
                <li><strong>Redes Sociais:</strong> Em algumas partes do nosso site, podem estar presentes botões ou widgets de
                    redes sociais que permitem o compartilhamento de conteúdo. Essas redes sociais podem definir cookies em seu
                    dispositivo para rastrear o uso de seus serviços.</li>
                <li><strong>Desempenho do Site:</strong> Alguns cookies podem ser usados para garantir que o site funcione
                    corretamente, fornecendo uma experiência de navegação suave.</li>
            </ol>

            <h2>Seu Consentimento</h2>
            <p>Ao utilizar nosso site de portfólio, você concorda com o uso de cookies, conforme descrito nesta Política de
                Cookies.
                Se você preferir não permitir o uso de cookies, pode ajustar as configurações do seu navegador para bloqueá-los ou
                notificá-lo quando um cookie estiver sendo enviado. No entanto, observe que a desativação de cookies pode afetar a
                funcionalidade e a experiência de navegação em nosso site.</p>

            <h2>Alterações na Política de Cookies</h2>
            <p>Podemos atualizar esta Política de Cookies periodicamente para refletir alterações na forma como usamos cookies ou
                por razões legais, regulatórias ou operacionais.
                Recomendamos que você reveja esta política regularmente para se manter informado sobre o uso de cookies em nosso
                site.</p>

            <h2>Entre em Contato Conosco</h2>
            <p>Se tiver alguma dúvida ou preocupação em relação ao uso de cookies em nosso site de portfólio, entre em contato
                conosco através dos meios de contato fornecidos no site.</p>

            <p>Data da última atualização: ${format(new Date(last_cookie_policy), 'dd/MM/yyyy')}</p>
            </div>
        `

export default policy;