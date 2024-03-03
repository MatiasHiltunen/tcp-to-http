# NodeJS TCP to HTTP esimerkki

## Esimerkki web-ohjelmointirajapinnat opintojaksolla

HTTP-protokollan yksinkertainen implementaatio TCP:n päälle.

*HUOM! Tämä on vain esimerkki siitä kuinka HTTP 1.1 yhteydet rakentuvat taustalla TCP:n päälle. Tämä esimerkki on haavoittuvainen useille eri hyökkäystyypeille sillä se ei sisällä mitään tietoturvaratkaisuja. Tätä ei tule hyödyntää oikeissa projekteissa. Opintojakson aikana käydään vielä myöhemmin ns. oikea toteutus läpi.*

### Käynnistys

Suorita komento:

- npm run dev