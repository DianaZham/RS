from django.http import JsonResponse

from apps.adresa.models import Dom, Rayon


def my_view(request):
    from dadata import Dadata
    token = "674009b926c2e6287fe147d0e622bb40519b8a48"
    secret = "8f83b76555e28ba1c0d10b0abebdb62addbf7a3b"
    dadata = Dadata(token, secret)

    count = len(Dom.objects.filter(uliza__rayon__isnull=True))
    i = 1
    for dom in Dom.objects.filter(uliza__rayon__isnull=True):

        try:
            result = dadata.clean("address", f'Москва {dom.uliza.name}, {dom.name}')
            rayon = result['city_district']
            print(rayon)
            print(f'{i}/{count} Москва {dom.uliza.name}, {dom.name} - ок')
        except Exception:
            print(f'{i}/{count}  Москва {dom.uliza.name}, {dom.name} - error')
        i += 1



    return JsonResponse({'status':'ок'})