alturas = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

def trappingRainWater(alturas):
    izq = 0
    der = len(alturas)-1 
    maxIzq = maxDer = 0
    aguaRecolectada = 0

    while(izq <= der):
        if(alturas[izq]<=alturas[der]): 
            if(alturas[izq]>=maxIzq): maxIzq = alturas[izq]
            else: aguaRecolectada += maxIzq - alturas[izq]
            izq += 1
        else:
            if(alturas[der]>=maxDer): maxDer = alturas[der]
            else: aguaRecolectada += maxDer - alturas[der]
            der -= 1
    return aguaRecolectada

print(trappingRainWater(alturas));
