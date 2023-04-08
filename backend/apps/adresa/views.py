from django.http import JsonResponse

from apps.adresa.models import Dom


def my_view(request):
    from dadata import Dadata
    token = "48b8179f470589a46e4c46e36d20c0c10eba93b9"
    secret = "5683a4a4d4660fa81e367f9fcb97b229379308fe"
    dadata = Dadata(token, secret)

    count = len(Dom.objects.filter(lat__isnull=True))
    i = 1
    for dom in Dom.objects.filter(lat__isnull=True):

        try:
            result = dadata.clean("address", f'Чита {dom.uliza.name}, {dom.name}')
            dom.lat = result['geo_lat']
            dom.lon = result['geo_lon']
            dom.json_dadata = result
            dom.save()
            print(f'{i}/{count} Чита {dom.uliza.name}, {dom.name} - ок')
        except Exception:
            print(f'{i}/{count}  Чита {dom.uliza.name}, {dom.name} - error')
        i += 1



    return JsonResponse({'status':'ок'})